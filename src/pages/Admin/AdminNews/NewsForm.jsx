import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Grid } from '../../../components/Grid';
import { Input, Button } from '../../../components/UI/';

const NewsForm = ({ onSave, submitBtnLabel, data }) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setImg(data.img);
            setThumbnail(data.thumbnail);
            setDescription(data.description);
            setBody(data.body);
        }
    }, [data]);

    const save = async () => {
        setIsSubmitting(true);

        if (
            title === '' ||
            img === '' ||
            thumbnail === '' ||
            description === '' ||
            body === ''
        ) {
            toast.error('Please fill all fields');
            setIsSubmitting(false);
            return;
        }

        await onSave({
            title,
            img,
            thumbnail,
            description,
            body,
        });

        setIsSubmitting(false);
    };

    return (
        <>
            <Grid.Row>
                <Grid.Col>
                    <Input
                        elementType='input'
                        name='title'
                        valueType='Title'
                        value={title}
                        elementConfig={{
                            type: 'text',
                            placeholder: 'Title',
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid.Col>

                <Grid.Col>
                    <Input
                        elementType='input'
                        name='thumbnail'
                        valueType='Thumbnail'
                        value={thumbnail}
                        elementConfig={{
                            type: 'text',
                            placeholder: 'thumbnail',
                        }}
                        onChange={(e) => setThumbnail(e.target.value)}
                    />
                </Grid.Col>

                <Grid.Col>
                    <Input
                        elementType='input'
                        name='img'
                        valueType='Header Image'
                        value={img}
                        elementConfig={{
                            type: 'text',
                            placeholder: 'Header Image',
                        }}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </Grid.Col>

                <Grid.Col>
                    <Input
                        elementType='input'
                        name='description'
                        valueType='Description'
                        value={description}
                        elementConfig={{
                            type: 'text',
                            placeholder: 'Description',
                        }}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid.Col>

                <Grid.Col>
                    <div className='form-group'>
                        <label className='mb-1'>Body</label>
                        <textarea
                            className='form-control'
                            placeholder='Body'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            style={{ height: '300px' }}
                        />
                    </div>
                </Grid.Col>
            </Grid.Row>

            <Button
                label={submitBtnLabel ? submitBtnLabel : 'Submit'}
                icon='lnir lnir-save'
                isLoading={isSubmitting}
                className='btn btn-primary text-white mt-2'
                onClick={save}
            />
        </>
    );
};

export default NewsForm;
