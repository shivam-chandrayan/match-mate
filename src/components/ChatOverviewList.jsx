import ChatOverviewListItem from "./ChatOverviewListItem";

export default function ChatOverviewList() {

    var data = [
        {
            name: "Lovely",
            lastText: "Kal gym chalna hai?",
            profileImg: "https://picsum.photos/50?random=1"
        },
        {
            name: "Sweety",
            lastText: "Deta bharwa do na koi",
            profileImg: "https://picsum.photos/50?random=2"
        },
        {
            name: "Mummy",
            lastText: "Ka re ekdum se bhul jata hai, phone karal nhi jata?",
            profileImg: "https://picsum.photos/50?random=3"
        },
        {
            name: "Bhadani",
            lastText: "Bro jamming",
            profileImg: "https://picsum.photos/50?random=4"
        },
        {
            name: "Satyam",
            lastText: "Bhai ab CTS tata aur hello Amazon",
            profileImg: "https://picsum.photos/50?random=5"
        },
        {
            name: "Swikriti",
            lastText: "ICICI ka credit card hai tumhare paas?",
            profileImg: "https://picsum.photos/50?random=6"
        },
    ]
    return (
        <div>
            {data.map(e => <ChatOverviewListItem data={e} key={e.name}/>)}
        </div>
    );
}