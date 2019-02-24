

export function getEmployees() {
    return new Promise ((resolve, reject) => {
        let employees = [
            {
                name: "Tom",
                job: 'engineer',
                email: "tom.1999@gmail.com",
                info: "Always does a good job",
                rating: 100
            },
            {
                name: "Tom",
                job: 'engineer',
                email: "tom.1999@gmail.com",
                info: "Always does a good job",
                rating: 100
            },
            {
                name: "Tom",
                job: 'engineer',
                email: "tom.1999@gmail.com",
                info: "Always does a good job",
                rating: 100
            }
        ];
        let errorMessage = 'No employees to choose in list';
        employees.length>0 ?  resolve(employees) : reject (errorMessage);
      });
}
