import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `About`,
    description: 'Something about us',
}
const About = async () => {
    const getData = async () => {
        const res = await fetch('https://catfact.ninja/fact',{ next: { revalidate: 3600 } });
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const json = await res.json();
        return json.fact
    };
    const data = await getData();
    return (
        <div style={{margin: '40px 0'}}>
            <h1 style={{fontSize: '35px', marginBottom:'20px'}}>About page</h1>
            <h2>{data}</h2>
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
                <br/>
                Integer placerat ante vel fringilla consectetur. Ut eu sapien gravida lacus pretium tincidunt porta nec
                turpis. Nam tincidunt, elit eget malesuada placerat, libero ante blandit erat, vitae posuere est magna
                vitae purus. Nullam elementum orci nec venenatis vulputate. Nulla nec dui ante. Proin efficitur maximus
                dictum. Sed quis enim posuere, condimentum ipsum eu, maximus dolor. Praesent gravida nulla quis metus
                mattis, nec convallis ipsum tristique. Donec dignissim, diam id efficitur aliquam, neque magna aliquam
                mauris, a gravida nunc nulla nec mi. Morbi eu sem mi. Nam eu lectus sodales, finibus magna et, varius
                lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    <br/>
                Nam consequat dictum enim, vitae lacinia arcu luctus sed. Nullam lobortis mi vel ante rutrum, et
                consequat augue viverra. Donec dignissim nisl in tortor aliquet molestie. Phasellus blandit neque
                sapien, quis sollicitudin nibh finibus sed. Donec eu urna vitae purus bibendum laoreet. Fusce et nibh
                ornare, scelerisque ipsum vel, condimentum metus. Phasellus sed arcu nunc. Maecenas mattis commodo nisl
                id eleifend. Praesent mollis, nibh et ornare ultrices, arcu purus pellentesque erat, id imperdiet dolor
                magna non diam. Donec congue hendrerit enim, viverra consectetur diam luctus ut. Quisque nec leo ut nunc
                luctus faucibus in quis odio. Sed ut mi rutrum, mollis elit eu, pulvinar ipsum. Suspendisse non
                malesuada sapien, in accumsan nibh. Aliquam erat volutpat. Nam efficitur sem consectetur mauris
                pellentesque, varius sollicitudin nisi rhoncus.

            </p>
        </div>
    );
};

export default About;