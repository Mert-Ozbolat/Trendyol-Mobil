
interface Route {
    name: string
}


interface TabIconProps {
    focused?: boolean;
    size: number;
    color: string;
    route: Route
}

export default TabIconProps