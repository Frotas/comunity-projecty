"use client"

import * as React from "react"

import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/utils/cn"

import { labelVariants } from "./labelVariants"

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
