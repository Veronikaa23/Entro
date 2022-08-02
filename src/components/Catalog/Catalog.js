import CatalogEvent from "./Event/CatalogEvent";

const Catalog = ({ events }) => {
    return (
        <section id="catalog-page">
            <h1>All Events</h1>
    
            {events.length > 0
                ? events.map(x => <CatalogEvent key={x._id} event={x} />)
                : <h3 className="no-articles">No events yet</h3>
            }
        </section>
    );
};

export default Catalog;