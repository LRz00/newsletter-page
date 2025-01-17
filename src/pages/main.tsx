import { useState } from "react";
import ListItem from "../components/list-item/list-item";
import Button from "../components/button/button";
import illustration from '../assets/movie-ticket.svg'
import iconList from '../assets/icon-list.svg';
import "./main.css"
import EmailForm from "../components/email-form/email-form";
function MainPage() {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState('');

    const handleIsSubscribed = () => {
        if (isSubscribed) {
            setIsSubscribed(false);
        } else {
            setIsSubscribed(true)
        }

    }

    const handleEmailSubmit = (submittedEmail: string) => {
        setEmail(submittedEmail);
        handleIsSubscribed();
    };
    return (
        <>
            <div>

                {!isSubscribed && (
                    <div id="card">
                        <div id="content">
                            <p id="title">Stay Updated!</p>
                            <p>Join our mailing list to receive news of the latest asian films releases!</p>
                            <div id="list">
                                <ListItem text="Daily Updates" image={iconList} />
                                <ListItem text="Films from directors Tsai Ming-Liang, Park Chan-wook, Sion Sono" image={iconList} />
                                <ListItem text="And Much MORE!" image={iconList} />
                            </div>
                            <EmailForm onSubmit={handleEmailSubmit} />
                        </div>

                        <div id="image">
                            <img id="illustration" src={illustration} alt="Illustration" />
                        </div>

                    </div>
                )}

                {isSubscribed && (
                    <div id="sucessCard">
                        <img src={iconList} alt="" />
                        <h1>Thanks for subscribing!</h1>
                        <p>An email has been sent to <b>{email}</b> plese check your inbox and confirm your subscription</p>
                        <div id="buttonContainer">
                            <Button text="Dismiss this message" onClick={handleIsSubscribed}></Button>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default MainPage;