/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Group, Image, ScrollArea, Stack } from "@mantine/core";
import { useState } from "react";

const listStiker = [
  {
    id: 1,
    name: "stiker1",
    url: "https://i.pinimg.com/originals/0a/2e/54/0a2e544c9a908beed6b544d031a444ca.jpg",
  },
  {
    id: 2,
    name: "stiker2",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9AKmsBY4yqdn3GueJJEVPJbfmf853gDL4cN8uc9eqsCTiJ1fzhcpywzVP68NCJEA5NQ&usqp=CAU",
  },
  {
    id: 3,
    name: "stiker3",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lkV3ZiQ8m-OELSui2JGVy80vnh1cyRUV7NrgFNluPVVs2HUAyCHwCMAKGe2s5jk2sn8&usqp=CAU",
  },
  {
    id: 4,
    name: "stiker4",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHy9ZdsPc6dHgVTl5yIGpRJ-KtpTIsXA2_kbfO1Oc-pv_f7CNKGxhO56RjKujE3xCyb9k&usqp=CAU",
  },
];

export default function Page() {
  const [chat, setChat] = useState<any[]>([]);
  return (
    <Stack p={"md"}>
      <Stack bg={"gray"} h={560} component={ScrollArea}>
        {chat.map((item, index) => (
          <Box mb={"lg"} key={index}>
            <Image w={100} h={100} src={item} alt={item} />
          </Box>
        ))}
      </Stack>
      <Group>
        {listStiker.map((item) => (
          <Box
            key={item.id}
            component={"a"}
            onClick={() => {
              setChat((prev) => [...prev, item.url]);
            }}
          >
            <Image w={100} h={100} src={item.url} alt={item.name} />
          </Box>
        ))}
      </Group>
    </Stack>
  );
}
