"use client";
import {
  Box,
  Button,
  Group,
  Image,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useState } from "react";

const listStiker = [
  {
    id: 1,
    name: "stiker2",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9AKmsBY4yqdn3GueJJEVPJbfmf853gDL4cN8uc9eqsCTiJ1fzhcpywzVP68NCJEA5NQ&usqp=CAU",
  },
  {
    id: 2,
    name: "stiker3",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lkV3ZiQ8m-OELSui2JGVy80vnh1cyRUV7NrgFNluPVVs2HUAyCHwCMAKGe2s5jk2sn8&usqp=CAU",
  },
  {
    id: 3,
    name: "stiker4",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHy9ZdsPc6dHgVTl5yIGpRJ-KtpTIsXA2_kbfO1Oc-pv_f7CNKGxhO56RjKujE3xCyb9k&usqp=CAU",
  },
];

type ChatItem = {
  type: "text" | "sticker";
  content: string;
};

export default function Page() {
  const [data, setData] = useState("");
  const [chat, setChat] = useState<ChatItem[]>([]);

  return (
    <Stack p={"md"}>
      <SimpleGrid cols={2}>
        <Stack bg={"gray.1"} h={560} component={ScrollArea} p="md">
          {chat.map((item, index) =>
            item.type === "sticker" ? (
              <Box mb={"lg"} key={index}>
                <Image w={50} h={50} src={item.content} alt="sticker" />
              </Box>
            ) : (
              <Text key={index}>{item.content}</Text>
            )
          )}
        </Stack>
        <Paper withBorder p="md">
          {JSON.stringify(chat, null, 2)}
        </Paper>
      </SimpleGrid>

      <Stack w={300}>
        <Textarea
          placeholder="Masukan chat"
          value={data}
          autosize
          onChange={(e) => setData(e.target.value)}
        />
        <Button
          onClick={() => {
            if (data.trim() !== "") {
              setChat((prev) => [...prev, { type: "text", content: data }]);
              setData(""); // clear after sending
            }
          }}
        >
          Kirim
        </Button>
      </Stack>

      <Group>
        {listStiker.map((item) => (
          <Box
            key={item.id}
            component="button"
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={() => {
              setChat((prev) => [
                ...prev,
                { type: "sticker", content: item.url },
              ]);
            }}
          >
            <Image w={100} h={100} src={item.url} alt={item.name} />
          </Box>
        ))}
      </Group>
    </Stack>
  );
}
