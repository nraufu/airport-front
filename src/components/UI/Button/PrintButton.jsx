import Button from './Button';

export default function PrintButton({ label, className }) {
    return (
        <Button
            className={`${className} no-print`}
            icon='fi fi-print'
            label={label ? label : 'Print'}
            onClick={() => window.print()}
        />
    );
}
