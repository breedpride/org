import { PublicPet } from '@bh/types';

export interface ChildGroup {
  anotherParent: PublicPet | undefined;
  date?: Date;
  pets: PublicPet[];
}
export const correctDate = (d: Date | undefined): boolean => {
  return d instanceof Date && !isNaN(d.getTime());
};

const getAnotherParent = (
  child: PublicPet,
  pet: PublicPet
): PublicPet | undefined => {
  return pet?.Sex?.Code === 'male' ? child.Mother : (child.Father as PublicPet);
};
export const groupChildren = (
  children: PublicPet[],
  pet: PublicPet
): ChildGroup[] => {
  const grouped: ChildGroup[] = [];
  children
    .map(pet => {
      return pet.DateOfBirth
        ? {
          ...pet,
          DateOfBirth: new Date(pet.DateOfBirth),
        }
        : { ...pet };
    })
    .sort((a: PublicPet, b: PublicPet) =>
      a.DateOfBirth && b.DateOfBirth && correctDate(a.DateOfBirth)
        ? a.DateOfBirth < b.DateOfBirth
          ? 1
          : -1
        : 1
    )
    .forEach((child: PublicPet) => {
      const group = grouped.find(
        (v: ChildGroup) =>
          v.anotherParent?.Id === getAnotherParent(child, pet)?.Id &&
          child.DateOfBirth &&
          v.date &&
          v.date?.getTime() === child.DateOfBirth?.getTime()
      );
      if (group) {
        group.pets.push(child);
      } else {
        grouped.push(
          child.DateOfBirth
            ? {
              anotherParent: getAnotherParent(child, pet),
              date: new Date(child.DateOfBirth),
              pets: [child],
            }
            : {
              anotherParent: getAnotherParent(child, pet),
              pets: [child],
            }
        );
      }
    });
  grouped.forEach(e =>
    e.pets.sort((a: PublicPet, b: PublicPet) =>
      b?.Sex?.Code === 'male' ? 1 : -1
    )
  );
  return grouped;
};

// @Pipe({
//   name: 'groupChildren',
//   standalone: true,
// })
// export class GroupChildrenPipe implements PipeTransform {
//   transform(
//     children: PublicPet[],
//     pet: PublicPet,
//     ...args: unknown[]
//   ): ChildGroup[] {
//     return groupChildren(children, pet);
//   }
// }
