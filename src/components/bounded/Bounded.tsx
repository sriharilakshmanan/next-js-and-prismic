import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};
function Bounded({
    as: Comp = "section",
    className,
    children,
    ...rest
}: BoundedProps) {
    return (
        <Comp
            className={clsx(className, "px-4 py-10 md:px-6 md:py-14 lg:py-16")}
            {...rest}
        >
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </Comp>
    );
}

export default Bounded;
