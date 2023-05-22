import type Social from './Social';

export default interface TeamMember {
    name: string;
    image: string;
    role: string;
    social: Social[];
}
