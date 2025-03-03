import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { getAllCategories } from '../store/actions/categoriesAction';
import CategoryItem from '../components/categories/categoryItem';



const Categories: React.FC = ({ navigation, route }) => {

    const categories = useSelector((state: RootState) => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategories({}))
    }, []);

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => <CategoryItem category={item} />}
            />
        </View>
    );
};
export default Categories;
const styles = StyleSheet.create({});