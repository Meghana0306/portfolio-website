import * as React from "react";
import './MainPage.css';
import { MainPageItemData } from "./MainPageItem";
import MenuItems from '../../configs/MainCategories.json';
import CategoryPage from "../category/CategoryPage";
import Logo from '../../assets/logo.png'

const MenuItemString = MenuItems as any

const menuItems = Object.keys(MenuItems)

export default class MainPage extends React.Component<MainPageProps, MainPageState> {

    constructor(props: MainPageProps) {
        super(props)
        this.state = {
            currentPath: "arts"
        }
    }

    componentDidMount() {
        this.navigateTo(Object.values(MenuItems)[0])
    }

    render() {
        const items = menuItems.map((item) => {
            const selected = MenuItemString[item] === this.state.currentPath
            return <text className={`MenuTitle ${selected ? "MenuTitleSelected" : ""}`} onClick={this.onClickItem}>{item}</text>
        })
        return (
            <div>
                {/* Top container */}
                <div style={{ backgroundColor: "#fff", width: "calc(100% - 20vw)", height: "100px", zIndex: "9", position: "fixed", overflow: "hidden", top: 0, margin: "0px 10vw 0px 10vw" }}>

                    <img src={Logo} style={{ height: "80px", marginTop: "10px" }} />

                    {/* Menu items */}
                    <div style={{ position: "absolute", bottom: "0", right: "0", marginBottom: ".7vw" }}>
                        {items}
                    </div>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
                </div>
                <div style={{ margin: "105px 10vw 0px 10vw" }}>

                    {/* Bottom border line */}

                    <CategoryPage path={this.state.currentPath} />
                </div>
            </div>
        )
    }

    onClickItem = (event: any) => {
        this.navigateTo(MenuItemString[event.target.textContent.toString()])
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    navigateTo = (path: string) => {
        // window.history.pushState({}, "", `/${path}`)
        this.setState({
            currentPath: path
        })
    }

    getMenuItem = (index: number): MainPageItemData => {
        return { name: menuItems[index] }
    }
}

interface MainPageProps {

}

interface MainPageState {
    currentPath: string
}