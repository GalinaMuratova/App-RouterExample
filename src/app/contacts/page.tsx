import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contacts',
    description: 'Our contacts',
}
const Contacts = () => {
    return (
        <div style={{margin: '40px 0'}}>
            <h1 style={{fontSize: '35px', marginBottom: '20px'}}>Contacts page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nisi sapien. Curabitur pharetra
                congue tincidunt. Fusce ut facilisis turpis. Mauris turpis nulla, pellentesque eget odio sed, lacinia
                porttitor nibh. Donec sagittis sapien nunc, in aliquet orci sollicitudin et. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a pretium quam, interdum
                euismod tortor. Cras nec ornare tortor. Donec interdum, ante quis facilisis tincidunt, velit metus
                condimentum tortor, egestas dignissim dui libero in purus. Vivamus in nisi quam. Suspendisse potenti.
                Donec quis sagittis diam, egestas ultrices est. Sed nisi lacus, pulvinar sed semper vitae, suscipit sit
                amet arcu. Etiam eget mi et tortor commodo pretium nec eget sem. Praesent rutrum luctus magna, efficitur
                convallis ante mattis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
            </p>
        </div>
    );
};

export default Contacts;