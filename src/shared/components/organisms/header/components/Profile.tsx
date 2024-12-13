"use client"

import React, { useEffect, useRef, useState, type ReactNode } from "react"

import { Icon } from "@/shared/components/atoms/icon/Icon"
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/shared/components/atoms/popover/popover"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { cn } from "@/shared/utils/cn"

type ProfileProps = {
	name: string
	avatar: string
	content: ReactNode
}

export default function Profile({ avatar, name, content }: ProfileProps) {
	const [open, setOpen] = useState(false)

	const [widthContent, setWidthContent] = useState(0)

	const triggerButtonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (triggerButtonRef.current) {
			setWidthContent(triggerButtonRef.current.offsetWidth)
		}
	}, [triggerButtonRef.current])

	return (
		<Popover open={open} onOpenChange={(open) => setOpen(open)}>
			<PopoverTrigger className="hidden lg:block" ref={triggerButtonRef}>
				<div className="flex items-center justify-center gap-2">
					<AvatarDefault src={avatar} size="sm" />
					<div className="flex flex-col items-start">
						<span className="text-xs text-content-quaternary">usuário</span>
						<span className="text-sm font-semibold text-content-primary">{name}</span>
					</div>
					<Icon
						name="CaretDown"
						color="white"
						size={20}
						className={cn("transition-all duration-500", open && "rotate-180")}
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent className="h-fit" style={{ width: widthContent, height: "fit" }}>
				{content}
			</PopoverContent>
		</Popover>
	)
}