import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Alert} from 'react-native'
import React from 'react'
import useAuthStore from "@/store/auth.store";
import {images} from "@/constants";
import {router} from "expo-router";
import CustomHeader from "@/components/CustomHeader";


const Profile = () => {
    const {user, signOut} = useAuthStore()

    const onLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Continue",
                    onPress: async () => {
                        try {
                            await signOut()
                            router.replace('/sign-in')
                        } catch (e) {
                            console.log("Something went wrong...", e)
                        }
                    }
                }
            ]
        );
    }

    return (
        <SafeAreaView className={'flex-1 bg-white'}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100 // Add bottom padding for better scrolling experience
                }}
            >
                <View className={'w-full h-full items-center px-5 pt-5'}>
                    <CustomHeader title="Profile" />
                    <Image
                        source={images.avatar}
                        className={'w-24 h-24 rounded-full'}
                        resizeMode={'contain'}
                    />

                    <Text className={'text-2xl font-psemibold mt-2'}>{user?.name}</Text>
                    <Text className={'text-base text-gray-500 font-pregular'}>{user?.email}</Text>

                    <View className={"w-full flex flex-col bg-white rounded-xl p-3 shadow-md shadow-dark-100/10 pt-5 mt-10 mb-10 "}>
                        {/*Profile name*/}
                        <View className={"profile-field mb-7"}>
                            <View className={"profile-field__icon"}>
                                <Image
                                    source={images.user}
                                    className={` w-6 h-6`}
                                    resizeMode={'contain'}
                                />
                            </View>

                            <View>
                                <Text className={"text-gray-200 mb-1"}>Full Name</Text>
                                <Text className={"base-bold"}>{user?.name}</Text>
                            </View>
                        </View>

                        {/*Profile email*/}
                        <View className={"profile-field mb-7"}>
                            <View className={"profile-field__icon"}>
                                <Image
                                    source={images.envelope}
                                    className={` w-6 h-6`}
                                    resizeMode={'contain'}
                                />
                            </View>

                            <View>
                                <Text className={"text-gray-200 mb-1"}>Email</Text>
                                <Text className={"base-bold"}>{user?.email}</Text>
                            </View>
                        </View>

                        {/*Phone number*/}
                        <View className={"profile-field mb-7"}>
                            <View className={"profile-field__icon"}>
                                <Image
                                    source={images.phone}
                                    className={` w-6 h-6`}
                                    resizeMode={'contain'}
                                />
                            </View>

                            <View>
                                <Text className={"text-gray-200 mb-1"}>Phone number</Text>
                                <Text className={"base-bold"}>+2290166909091</Text>
                            </View>
                        </View>

                        {/*Address*/}
                        <View className={"profile-field"}>
                            <View className={"profile-field__icon"}>
                                <Image
                                    source={images.location}
                                    className={` w-6 h-6`}
                                    resizeMode={'contain'}
                                />
                            </View>

                            <View>
                                <Text className={"text-gray-200 mb-1"}>Address</Text>
                                <Text className={"base-bold"}>Berlin - Germany</Text>
                            </View>
                        </View>
                    </View>

                    <View className={"w-full flex justify-center items-center text-center rounded-full py-3 bg-primary-opacity-5 border-primary border-2 mb-5"}>
                        <Text className={"base-bold text-primary"}>Edit profile</Text>
                    </View>

                    <TouchableOpacity onPress={() => onLogout() } className={"w-full flex flex-row justify-center items-center text-center rounded-full py-3 bg-red-500/5 border-red-500 border-2"}>
                        <Image
                            source={images.logout}
                            className={` w-6 h-6`}
                            resizeMode={'contain'}
                        />
                        <Text className={"base-bold text-red-500"}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile