import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router";
import classes from "../../modules/Main/Navbar.module.scss";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";




const Navbar = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/menus`)
            .then(function (response) {
                setMenu(response.data[0]);
                console.log(response.data[0]);
            })
            .catch(function (error) {

                console.log(error);
            })

    }, [])



    return (
        <>
            <nav className={classes["navbar"]}>
                <h2>Cyber</h2>

                <input type={"text"} className={classes["search-bar"]} placeholder={"Search..."}/>

                <ul className={classes["menu-links"]}>
                    <li>
                        <a href={menu.navbar[0].link}>{menu.navbar[0].name}</a>
                    </li>

                    <li>
                        <a href={menu.navbar[1].link}>{menu.navbar[1].name}</a>
                    </li>

                    <li>
                        <a href={menu.navbar[2].link}>{menu.navbar[2].name}</a>
                    </li>

                    <li>
                        <a href={menu.navbar[3].link}>{menu.navbar[3].name}</a>
                    </li>
                </ul>

                <div className={classes["icons-side"]}>
                    <a><CiHeart /></a>
                    <a><IoCartOutline /></a>
                    <a><IoPersonOutline /></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;