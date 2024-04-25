"use client"

import { Input } from "@/components/Input";
import { Space } from "@/components/Space";
import { setPrompt, setLoader, setMsg } from "@/redux/features/prompt";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { gptPrompt } from "@/services/gpt-prompt";

export const PromptSection = ({ }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const prompt = useSelector(state => state.prompt.prompt);
    const loader = useSelector(state => state.prompt.loading);
    const id = Math.floor(Math.random() * 1000);

    const goToChatIfPrompted = async (e) => {
        e?.preventDefault();

        if (prompt !== "") {
            dispatch(setLoader(true));
            const res = await gptPrompt(prompt);
            dispatch(setMsg({ you: res.data.prompt, bot: res.data.text }))
            dispatch(setLoader(false));

            // console.log(res);

            if (location.pathname == "/") {
                router.push(`/chat/${id}`);
            }
        }
    }


    return <section className="prompt-section col">
        <div className="input row center">
            <form onSubmit={goToChatIfPrompted} className="row">
                <Input className={"center"} val={prompt} placeholder={"Type a Prompt"} type={"text"} onChange={(val) => dispatch(setPrompt(val))} />
                <Space p={".3"} />
                <Button onClick={() => {}} loading={loader} value={"Send"} />

            </form>
        </div>
    </section>
}