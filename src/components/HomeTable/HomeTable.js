import React from "react";
import { Image  } from 'react-bootstrap'
import alexImage from "../../images/alex.png"
import mattImage from "../../images/matt.png"
import "./HomeTable.css"

function HomeTable() {
    return (
            <tbody>
                <tr>
                <td>2X</td>
                <Image className="image_size" src={alexImage} />
                <td>Anverch</td>
                <td>Alex Saiyan</td>
                <td>5</td>
                <td>4</td>
                <td>0</td>
                </tr>
                <tr>
                <td></td>
                <Image className="image_size" src={mattImage} />
                <td>Ganzaga</td>
                <td>Matt Houston</td>
                <td>2</td>
                <td>6</td>
                <td>0</td>
                </tr>
            </tbody>
    )
};

export default HomeTable;