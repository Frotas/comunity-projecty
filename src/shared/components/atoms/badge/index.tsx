import * as React from "react"

import {
	badgeVariants,
	type BadgeVariants
} from "@/shared/components/atoms/badge/variants"
import { cn } from "@/shared/utils/cn"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariants {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
export type { BadgeProps }
