import React, { useState } from "react";
import Chat from '../components/StockPageChat/StockPageChat';


export default function ChatTestPage() {
  const user = "user";
  const stock = "ticker";

  return(
    <>
        <h2 className="text-center mb-4">
            Stock Page
        </h2>
        <section>
          <Chat
            user={ user }
            stock={ stock }
          />
        </section>
    </>
  );
}
