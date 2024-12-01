import { cva } from "class-variance-authority"

export const sheetVariants = cva(
	"fixed z-50 gap-4 bg-content-shape-secondary p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4 border-l border-content-shape-quaternary data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm shadow-lg shadow-black"
			}
		},
		defaultVariants: {
			side: "right"
		}
	}
)