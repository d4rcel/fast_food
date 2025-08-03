import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import useAuthStore from "@/store/auth.store";
import {images} from "@/constants";
import ProfileButton from "@/components/ProfileButton";
import {router} from "expo-router";

const Profile = () => {
    const {user, signOut} = useAuthStore()

    const onLogout = async () => {
        await signOut()
        router.replace('/sign-in')
    }

    return (
        <SafeAreaView className={'flex-1 bg-white'}>
            <View className={'w-full h-full items-center px-4'}>
                <Image
                    source={images.avatar}
                    className={'w-24 h-24 rounded-full'}
                    resizeMode={'contain'}
                />
                <Text className={'text-2xl font-psemibold mt-2'}>{user?.name}</Text>
                <Text className={'text-base text-gray-500 font-pregular'}>{user?.email}</Text>

                <View className={'w-full mt-8'}>
                    <ProfileButton
                        title={'Personal Information'}
                        icon={images.user}
                    />
                    <ProfileButton
                        title={'My Orders'}
                        icon={images.bag}
                    />
                    <ProfileButton
                        title={'My Vouchers'}
                        icon={images.dollar}
                    />
                    <ProfileButton
                        title={'Logout'}
                        icon={images.logout}
                        isLogout={true}
                        onPress={onLogout}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Profile