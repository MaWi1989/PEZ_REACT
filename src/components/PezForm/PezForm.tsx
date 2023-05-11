import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface PezFormProps {
    id?:string;
    data?:{}
}

interface PezState {
    name: string;
    price: string;
}

export const PezForm = (props:PezFormProps) => {

    const dispatch = useDispatch();
    let { pezData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<PezState>(state => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">PEZ Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="Series"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="value">Value</label>
                    <Input {...register('value')} name="value" placeholder="Value"/>
                </div>
                <div>
                    <label htmlFor="year_introduced">Year Introduced</label>
                    <Input {...register('year_introduced')} name="year_introduced" placeholder="Year Introduced"/>
                </div>
                <div>
                    <label htmlFor="retired">Retired?</label>
                    <Input {...register('retired')} name="retired" placeholder="Retired?"/>
                </div>
                <div>
                <label htmlFor="original_package">Original Package?</label>
                <Input {...register('original_package')} name="original_package" placeholder="Original Package?"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}