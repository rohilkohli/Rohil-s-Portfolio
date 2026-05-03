"use client"

import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
} from "motion/react"
import { Check, Loader2, Send, X } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button, ButtonProps } from "./button"

const DRAG_CONSTRAINTS = { left: 0, right: 170 }
const DRAG_THRESHOLD = 0.9

const BUTTON_STATES = {
  initial: { width: "14rem" },
  completed: { width: "8rem" },
}

const ANIMATION_CONFIG = {
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 40,
    mass: 0.8,
  },
}

type StatusIconProps = {
  status: string
}

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const iconMap: Record<StatusIconProps["status"], JSX.Element> = useMemo(
    () => ({
      loading: <Loader2 className="animate-spin text-neon-cyan" size={20} />,
      success: <Check className="text-green-500" size={20} />,
      error: <X className="text-red-500" size={20} />,
    }),
    []
  )

  if (!iconMap[status]) return null

  return (
    <motion.div
      key={crypto.randomUUID()}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      {iconMap[status]}
    </motion.div>
  )
}

const useButtonStatus = (resolveTo: "success" | "error") => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = useCallback(() => {
    setStatus("loading")
    setTimeout(() => {
      setStatus(resolveTo)
    }, 2000)
  }, [resolveTo])

  return { status, handleSubmit }
}

interface SlideButtonProps extends ButtonProps {
  onSlide?: () => void;
}

export const SlideButton = forwardRef<HTMLButtonElement, SlideButtonProps>(
  ({ className, disabled, onSlide, ...props }, ref) => {
    const [isDragging, setIsDragging] = useState(false)
    const [completed, setCompleted] = useState(false)
    const dragHandleRef = useRef<HTMLDivElement | null>(null)
    const { status, handleSubmit } = useButtonStatus("success")

    const dragX = useMotionValue(0)
    const springX = useSpring(dragX, ANIMATION_CONFIG.spring)
    const dragProgress = useTransform(
      springX,
      [0, DRAG_CONSTRAINTS.right],
      [0, 1]
    )

    const handleDragStart = useCallback(() => {
      if (completed) return
      setIsDragging(true)
    }, [completed])

    const handleDragEnd = () => {
      if (completed) return
      setIsDragging(false)

      const progress = dragProgress.get()
      if (progress >= DRAG_THRESHOLD) {
        setCompleted(true)
        handleSubmit()
        if (onSlide) onSlide()
      } else {
        dragX.set(0)
      }
    }

    const handleDrag = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => {
      if (completed) return
      const newX = Math.max(0, Math.min(info.offset.x, DRAG_CONSTRAINTS.right))
      dragX.set(newX)
    }

    const adjustedWidth = useTransform(springX, (x) => x + 10)

    return (
      <motion.div
        animate={completed ? BUTTON_STATES.completed : BUTTON_STATES.initial}
        transition={ANIMATION_CONFIG.spring}
        className={cn(
          "relative flex h-12 items-center justify-center bg-cyber-gray-900/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-full",
          className
        )}
      >
        {!completed && (
          <motion.div
            style={{
              width: adjustedWidth,
            }}
            className="absolute inset-y-0 left-0 z-0 bg-gradient-to-r from-neon-cyan/25 to-transparent rounded-l-full"
          />
        )}
        
        {/* Placeholder text (Dynamic) */}
        {!completed && (
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-slate-400 uppercase tracking-widest pointer-events-none pl-8"
           >
             {isDragging ? 'Executing Transmit...' : 'Slide to execute'}
           </motion.span>
        )}

        <AnimatePresence>
          {!completed && (
            <motion.div
              ref={dragHandleRef}
              drag="x"
              dragConstraints={DRAG_CONSTRAINTS}
              dragElastic={0.05}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrag={handleDrag}
              style={{ x: springX }}
              className="absolute left-1 z-10 flex cursor-grab items-center justify-start active:cursor-grabbing"
            >
              <div
                className="h-10 w-10 rounded-full bg-cyber-gray-900 border border-neon-cyan text-neon-cyan flex items-center justify-center transition-all duration-200 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)] active:scale-95 group/handle relative"
              >
                <div className="h-7 w-7 rounded-full border border-neon-cyan/40 flex items-center justify-center transition-colors group-hover/handle:border-neon-cyan/70">
                  <Send 
                    className="size-4 rotate-45 transition-transform group-hover/handle:scale-110" 
                  />
                </div>
                {/* Subtle pulsing ring while dragging */}
                {isDragging && (
                  <div className="absolute -inset-1 rounded-full border border-neon-cyan animate-ping opacity-30" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {completed && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                ref={ref}
                disabled={status === "loading" || disabled}
                {...props}
                className={cn(
                  "size-full rounded-full bg-cyber-gray-700/50 border border-neon-cyan/20 text-neon-cyan transition-all duration-300",
                  className
                )}
              >
                <AnimatePresence mode="wait">
                  <StatusIcon status={status} />
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

SlideButton.displayName = "SlideButton"
