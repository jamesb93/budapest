import { writable } from 'svelte/store';

export const maxSamples = writable(15);
export const interacted = writable(false);

const colours = [
    'color:green',
    'color:blue',
    'color:red',
]

const colourChoice = colours[Math.floor(Math.random()*colours.length)];
console.log('%cMade by James Bradbury | www.jamesbradbury.net', colourChoice)