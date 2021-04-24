import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Headline } from "react-native-paper";
import { useSelector } from "react-redux";
import ResourceCard from "../components/ResourceCard";
import { RootState } from "../reducers";

const Resources: FC = () => {
    const { resources } = useSelector((state: RootState) => state.app);
    return (
        <>
            <Appbar.Header statusBarHeight={0}>
                <Appbar.Content title="Ресурсы" />
            </Appbar.Header>
            <FlatList
                ListEmptyComponent={
                    <View style={styles.placeholderContainer}>
                        <Headline>Пока нет ресурсов</Headline>
                    </View>
                }
                data={resources}
                keyExtractor={item => "" + item.id}
                renderItem={({ item }) => <ResourceCard resource={item} />}
            />
        </>
    );
};

export default Resources;

const styles = StyleSheet.create({
    placeholderContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
