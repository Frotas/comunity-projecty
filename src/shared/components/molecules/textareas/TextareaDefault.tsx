import { forwardRef, type HTMLAttributes } from "react"

import { cn } from "@/shared/utils/cn"

import { Label } from "../../atoms/label/index"
import { Textarea } from "../../atoms/textArea/index"

type TextareaWithLabelProps = HTMLAttributes<HTMLTextAreaElement> & {
	hint?: string
	label?: string
	hasHint?: boolean
	placeholder?: string
	rootClassName?: string
	hintClassName?: string
	labelClassName?: string
	textareaClassName?: string
}

const TextareaDefault = forwardRef<HTMLTextAreaElement, TextareaWithLabelProps>(
	(
		{
			label,
			hint,
			hasHint = true,
			placeholder,
			rootClassName,
			hintClassName,
			textareaClassName,
			...props
		},
		ref
	) => {
		return (
			<div className={cn("grid w-full gap-1.5", rootClassName)}>
				{label && <Label htmlFor="message">{label}</Label>}

				<Textarea
					ref={ref}
					className={textareaClassName}
					placeholder={placeholder}
					id="message"
					{...props}
				/>

				{hasHint && (
					<p className={cn("text-sm text-content-tertiary", hintClassName)}>{hint}</p>
				)}
			</div>
		)
	}
)

TextareaDefault.displayName = "TextareaDefault"

export { TextareaDefault }
