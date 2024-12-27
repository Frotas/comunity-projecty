import { cn } from "@/shared/utils/cn"

import { AvatarDefault } from "../avatars/AvatarDefault"
import { variantDescription, variantTitle } from "./variants"

export type CardInfoProps = {
	dp?: "top" | "center" | "bottom"
	size?: "xs" | "sm" | "md" | "lg"
	image: string
	title: string
	className?: string
	rootClassName?: string
	description: string
	showDescription?: boolean
}

export function CardInfo({
	dp = "top",
	size = "sm",
	title,
	image,
	className,
	description,
	rootClassName,
	showDescription = true
}: CardInfoProps) {
	return (
		<div className={cn("flex items-center justify-center gap-2", rootClassName)}>
			<AvatarDefault src={image} size={size} />
			<div
				className={cn(
					"flex flex-col items-start",
					dp === "center" && "flex-row items-center gap-2",
					className
				)}>
				{dp === "top" && showDescription && (
					<span className={variantDescription({ size })}>{description}</span>
				)}
				<span className={variantTitle({ size })}>{title}</span>
				{(dp === "bottom" || dp === "center") && showDescription && (
					<span className={variantDescription({ size })}>{description}</span>
				)}
			</div>
		</div>
	)
}
