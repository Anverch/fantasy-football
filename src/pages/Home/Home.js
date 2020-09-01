import React from "react";
import { Table, Image  } from 'react-bootstrap'
import HomeTable from "../../components/HomeTable/HomeTable"
import "./Home.css"

function Home() {
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                <Image  className="fas fa-trophy" />
                <th></th>
                <th>Team Name</th>
                <th>User</th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                </tr>
            </thead>
        <HomeTable />
        </Table>

    )
};

export default Home;