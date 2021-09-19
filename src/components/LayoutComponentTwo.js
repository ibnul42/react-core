import useWindowWidth from "./hooks/useWindowWidth";

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth();
    return(
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>Another Device </h1>
        </div>
    )
}