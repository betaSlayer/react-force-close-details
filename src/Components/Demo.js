import Details, { useCloseAll } from './Details';

const Demo = () => {
    const [close, closeAll] = useCloseAll();
    const content = [
        {
            id: 1,
            title: 'How can I use a discount code or gift card?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed mattis nibh. Duis ullamcorper in diam id dapibus. Cras quis vestibulum libero, vitae sagittis sem.',
        }, {
            id: 2,
            title: 'Do you ship world wide?',
            content: 'Even to outer space. No problem if you are currently living on the International Space Station.',
        }, {
            id: 3,
            title: 'Do you offer samples?',
            content: '#ohmygodweregonnadie',
        }
    ];

    return (
        <>
            <h1>Demo force close all elements</h1>
            <button type="button" className="force-close" onClick={closeAll}>Force close all details</button>
            <div className="details-wrapper">
                {content.map(({ id, title, content }) => (
                    <Details
                        key={id}
                        classes={{
                            details: 'details',
                            summary: 'details__summary'
                        }}
                        forceState={close}
                        summary={<h2 className="details__summary-title">{title}</h2>}
                    >
                        <div className="details__content">{content}</div>
                    </Details>
                ))}
            </div>
        </>
    );
};

export default Demo;