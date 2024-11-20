import { forwardRef, HTMLAttributes } from "react"

import { cn } from "@/shared/utils/cn"

import { Label } from "../../atoms/label/index"
import { Textarea } from "../../atoms/textArea/index"

type TextareaWithLabelProps = HTMLAttributes<HTMLTextAreaElement> & {
	label: string
	placeholder: string
	rootClassName: string
	labelClassName: string
	textareaClassName: string
}

const TextareaWithLabel = forwardRef<HTMLTextAreaElement, TextareaWithLabelProps>(
	(
		{ label, placeholder, rootClassName, labelClassName, textareaClassName, ...props },
		ref
	) => {
		return (
			<div className={cn("grid w-full gap-1.5", rootClassName)}>
				<Label htmlFor="message" className={labelClassName}>
					{label}
				</Label>
				<Textarea
					ref={ref}
					className={textareaClassName}
					placeholder={placeholder}
					id="message"
					{...props}
				/>
			</div>
		)
	}
)

TextareaWithLabel.displayName = "TextareaWithLabel"

export { TextareaWithLabel }