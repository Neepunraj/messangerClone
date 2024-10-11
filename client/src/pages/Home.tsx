import { useNavigate } from "react-router-dom";
import { useLoggedInAuth } from "../context/AuthContex";
import { Channel, ChannelHeader, ChannelList, ChannelListMessengerProps, Chat, LoadingChannels, LoadingIndicator, MessageInput, MessageList, useChatContext, Window} from 'stream-chat-react'
import { Button } from "../components/Button";

export function Home() {
    const {user,streamChat} = useLoggedInAuth()
    if (streamChat === null ) return <LoadingIndicator />

  return (
    <Chat client={streamChat!}>
        <ChannelList List={Channels} 
        sendChannelsToList
        filters={{ members :{$in :[user.id]}}}/>
        <Channel>
            <Window>
                <ChannelHeader/>
                <MessageList />
                <MessageInput />
            </Window>
        </Channel>

    </Chat>
  );
}



function Channels({loadedChannels}:ChannelListMessengerProps){
    const navigate = useNavigate()
    const {logout} = useLoggedInAuth()
    const {setActiveChannel,channel:activeChannel} = useChatContext()
    return (
        <div className="w-60 flex flex-col gap-4 m-3 h-full">
           <Button onClick={()=> navigate('/channel/new')}>
            New Conversation

           </Button>
           <hr className="border-gray-500"/>
           {
            LoadingChannels != null && loadedChannels!.length > 0 ?
            loadedChannels!.map(channel=>{
                const isActive = channel === activeChannel
                const extraClasss = isActive?"bg-blue-500 text-white" : "hover:bg-blue-100 bg-gray-100"

                return (
                    <button onClick={()=> setActiveChannel(channel)}
                    disabled= {isActive}
                    className={`p-4 rounded-lg flex gap-3 items-center ${extraClasss}`}
                    key={channel.id} >
                        {channel.data?.image && (
                            <img src={channel.data.image}
                            className="w-10 h-10 rounded-full object-center object-cover" />
                        ) }
                        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                            {channel.data?.name || channel.id}
                        </div>

                    </button>
                )

            }):"No Conversations"

           }
           <hr className="border-gray-500 mt-auto"/>
           <Button onClick={()=>logout.mutate()} disabled={logout.isPending} >
            Logout
           </Button>


        </div>
    )

}