import img1 from "../../public/images/img1.svg"
import img2 from "../../public/images/img2.svg"
import img3 from "../../public/images/img3.svg"
import img4 from "../../public/images/img4.svg"
import img5 from "../../public/images/img5.svg"
import img6 from "../../public/images/img6.svg"
import img7 from "../../public/images/img7.svg"
import img8 from "../../public/images/img8.svg"
import img9 from "../../public/images/img9.svg"
import img10 from "../../public/images/img10.svg"
import img11 from "../../public/images/img11.svg"

export interface cloudBackupData {
    img: any;
    descr: string
}
export const cloudBackupData:cloudBackupData[] = [
   {
    img: img1,
    descr: "We just backup what you need, so you won't waste time and resources on temporary or transient data."
   },
    {
    img: img2,
    descr: "DataSafe incremental backups use 60x less data than image backup products."
   },
    {
    img: img3,
    descr: "The read-only design ensures that nothing is written to your drive when recovering data. Enjoy an intuitive user interface."
   },
    {
    img: img4,
    descr: "Our solution recovers file names and directory structures for all deleted files."
   },
   {
    img: img5,
    descr: "With WAN optimization, you may cut bandwidth even during peak hours."
   },
   {
    img: img6,
    descr: "The software is compatible with all types of hard drives, SSDs, memory cards, and USB sticks."
   },
   {
    img: img7,
    descr: "It is natively supported on 64-bit Windows, Mac OSx, and Linux systems as well as 32-bit systems."
   },
   {
    img: img8,
    descr: "It supports NTFS, FAT12, FAT16, FAT32, exFAT, EXT, EXT2, EXT3, EXT4, HFS+, and APFS and can recover large discs."
   },
   {
    img: img9,
    descr: "We use the highest standard of encryption, AES 256-bit, to protect your data both in transit and at rest."
   },
   {
    img: img10,
    descr: "You can generate your own private key or have one generated during deployment."
   },
   {
    img: img11,
    descr: "Our ISO-certified data centers are worldwide, with additional certifications specific to each area."
   },
]