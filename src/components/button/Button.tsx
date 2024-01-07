import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

function Button({ className, ...rest }: PrismicNextLinkProps) {
    return (
        <PrismicNextLink
            {...rest}
            className={clsx(
                className,
                "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider"
            )}
        />
    );
}

export default Button;
