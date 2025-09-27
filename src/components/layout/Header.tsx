import { Text, TextInput, View } from "react-native";
export default function Header() {
  return (
    <View className='px-2 pt-8 pb-6 gap-4'>
      <Text className='text-white text-4xl font-bold'>Search</Text>
      <View className='flex-row items-center gap-2'>
        <TextInput
          placeholder='Shows, Movies, and More...'
          placeholderTextColor='#98989F'
          className='bg-[#1c1c1f] text-xl flex-1 text-white rounded-xl px-6 py-3.5'
        />
        {/* <Pressable>
          <Text className='text-white text-xl font-bold'>Search</Text>
        </Pressable> */}
      </View>
    </View>
  );
}
