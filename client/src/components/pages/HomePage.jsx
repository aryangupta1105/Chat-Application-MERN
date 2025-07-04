
import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux';
import NoChatSelected from '../NoChatSelected';
import ChatContainer from '../ChatContainer';
import { Loader } from 'lucide-react';

const HomePage = () => {
    const {selectedUser} = useSelector((store)=>store.chats);
    const {isLoading} = useSelector((store)=>store.auth);

      if(isLoading){
    return <div className='absolute top-0 bottom-0 flex items-center justify-center left-0 right-0  '><div className='animate-spin'><Loader/></div></div>
  }
   return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage
