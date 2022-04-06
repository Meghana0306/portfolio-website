import * as React from "react";
import './MainPage.css'
import { MainPageItemData } from "./MainPageItem";
import MenuItems from '../../configs/MainCategories.json'
import CategoryPage from "../category/CategoryPage";

const MenuItemString = MenuItems as any

const menuItems = Object.keys(MenuItems)

export default class MainPage extends React.Component<MainPageProps, MainPageState> {

    componentDidMount() {
        this.navigateTo(Object.values(MenuItems)[0])
    }

    render() {
        const items = menuItems.map((item) => {
            return <text className={"MenuTitle"} onClick={this.onClickItem}>{item}</text>
        })

        return (
            <div style={{ margin: "0px 10vw 0px 10vw" }}>
                {/* Top container */}
                <div style={{ width: "100%", height: "100px", position: "relative" }}>

                    {/* Menu items */}
                    <div style={{ position: "absolute", bottom: "0", right: "0", marginBottom: ".7vw" }}>
                        {items}
                    </div>
                </div>

                {/* Bottom border line */}
                <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
                <CategoryPage />
            </div>
        )
    }

    onClickItem = (event: any) => {
        this.navigateTo(MenuItemString[event.target.textContent.toString()])
    }

    navigateTo = (path: string) => {
        window.history.pushState({}, "", `/${path}`)
    }

    getMenuItem = (index: number): MainPageItemData => {
        return { name: menuItems[index] }
    }
}

interface MainPageProps {

}

interface MainPageState {
    currentItem: string
}