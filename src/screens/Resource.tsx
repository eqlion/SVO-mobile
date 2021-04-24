import { RouteProp, useRoute } from "@react-navigation/native";
import React, { FC, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { ResourceStackParamList } from "../../router";
import BigResourceCard from "../components/BigResourceCard";
import CreateApplication from "../components/CreateApplication";
import useTypedNavigation from "../hooks/useTypedNavigation";

const Resource: FC = () => {
    const { resource } = useRoute<
        RouteProp<ResourceStackParamList, "Resource">
    >().params;
    const navigation = useTypedNavigation<"Home">();
    const [start, setStart] = useState<Date>();
    const [end, setEnd] = useState<Date>();
    const [parkingSpace, setParkingSpace] = useState("");

    const onSubmit = useCallback(() => {
        console.log({ start, end, parkingSpace, id: resource.id });
    }, [end, parkingSpace, resource.id, start]);

    return (
        <>
            <Appbar.Header statusBarHeight={0}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={resource.title} />
            </Appbar.Header>
            <ScrollView>
                <BigResourceCard resource={resource} />
                <CreateApplication
                    {...{
                        start,
                        setEnd,
                        setParkingSpace,
                        setStart,
                        end,
                        parkingSpace,
                        onSubmit,
                    }}
                />
            </ScrollView>
        </>
    );
};

export default Resource;

const styles = StyleSheet.create({});
