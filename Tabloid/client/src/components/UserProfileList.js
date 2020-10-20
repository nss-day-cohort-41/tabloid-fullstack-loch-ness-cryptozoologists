import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { ListGroup, ListGroupItem, Button } from "reactstrap";


const UserProfileList = (props) => {
    const { userProfiles, listAllUserProfiles } = useContext(UserProfileContext);
    

    useEffect(() => {
        listAllUserProfiles();
    }, []);


    return (
        <>
            <div>
                <h1>Active Profiles</h1>
                {userProfiles.map((userProfile) => (

                    <div key={userProfile.id}>
                        <ListGroup>
                            <ListGroupItem>
                                <h6>Display Name</h6>
                                <p>{userProfile.displayName}</p>
                                <h6>Full Name</h6>
                                <p>{userProfile.firstName} {userProfile.lastName}</p> 
                            </ListGroupItem>
                            </ListGroup>
                            </div>

                ))}
            </div>
        </>
    );
};

export default UserProfileList;