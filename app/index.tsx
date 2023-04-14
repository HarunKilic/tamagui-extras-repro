import { YStack } from "tamagui";
import { LmAutocomplete } from "tamagui-extras/form";

import { MyStack } from "../components/MyStack";

export default function Home() {
  return (
    <MyStack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <LmAutocomplete options={[{ label: "TEST", value: "TEST" }]} />
      </YStack>
    </MyStack>
  );
}
