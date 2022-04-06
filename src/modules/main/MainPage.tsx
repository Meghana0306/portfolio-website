import * as React from "react";
import './MainPage.css'
import StackGrid from "react-stack-grid";
import MainPageItem, { MainPageItemData } from "./MainPageItem";
import MenuItems from './MainCategories.json'

export class MainPage extends React.Component<MainPageProps, {}> {


    render() {
        const menuItems = []
        for (let i = 0; i < MenuItems.length; i++) {
            menuItems.push(<MainPageItem item={this.getMenuItem(i)} index={i}/>)
        }
        return (
            <div className="MainGrid">
                {menuItems}
            </div>
        )
    }

    getMenuItem(index: number): MainPageItemData {
        return {
            name: MenuItems[index]
        }
    }
}

interface MainPageProps {

}