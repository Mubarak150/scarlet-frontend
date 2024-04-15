export default function TimeStamp() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const now = new Date();
        const dayOfWeek = days[now.getDay()];
        const dayOfMonth = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

    return (
        <>
         <p className="time-stamp">
         {dayOfWeek}, {dayOfMonth} {month} {year}
         </p>
        </>
    );
}