import { Space } from "@/components/Space";
import Typing from "@/components/Typing";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

export const ChatSection = () => {
    const chats = useSelector(state => state.prompt.msg);
    const chatRef = useRef(0);

    useEffect(() => {

        const domNode = chatRef.current;
        if (domNode) {
            // console.log(domNode)

            domNode.scrollTop = domNode.scollHeight;
            domNode.addEventListener("DOMNodeInserted", event => {
                // event.target.scroll({
                //   top: event.target.scrollHeight, 
                //   behavior: "smooth"
                // });
                try{
                    event?.target?.scrollIntoView({ behavior: "smooth", block: "start" });

                } catch (err){

                }

            })
        }
    }, [])

    return <section className="chat-section center" ref={chatRef}>
        <div className="col">
            {chats.map((item, i) => {
                return <div className="msg col" key={i}>
                    <h4>{item?.you}</h4>
                    <Space p=".6" />
                    <p className="dim">
                    <Typing text={item?.bot}/>
                    </p>
                </div>
            })}
        </div>

    </section>
}