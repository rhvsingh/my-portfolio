import { cn } from "@/lib/utils"
import React from "react"

/**
 * Props for the Container component.
 */
interface ContainerProps {
    /**
     * Additional class names to apply to the container.
     */
    className?: string

    /**
     * The content to be rendered inside the container. Can be a React node or a string.
     */
    children: React.ReactNode | string
}

/**
 * A reusable container component that centers its content and applies consistent styling.
 *
 * @param {ContainerProps} props - The props for the Container component.
 * @param {string} [props.className] - Additional class names to apply to the container.
 * @param {React.ReactNode | string} props.children - The content to be rendered inside the container.
 */
const Container = ({ className, children }: ContainerProps) => {
    return <div className={cn("container mx-auto px-4", className)}>{children}</div>
}

export default Container
