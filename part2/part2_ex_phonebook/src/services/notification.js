// import App.className from "../";

export default function Notification ({message}) {
    if (message === null) {
        return null;
    }
    return (
        <div className="error">
            {message}
        </div>
    )
}