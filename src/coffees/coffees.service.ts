import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Sipwreck Roast',
            brand: 'Buddy Brew',
            flavours: ['chocolate', 'barley']
        },
    ];

    public findAll(): Coffee[] {
        return this.coffees;
    }

    public findOne(id: string): Coffee {
        return this.coffees.find(item => item.id === +id);
    }

    public create(createCoffeeDto: CreateCoffeeDto) {
        this.coffees.push({ 
            id: 999,
            name: createCoffeeDto.name,
            brand: createCoffeeDto.brand,
            flavours: createCoffeeDto.flavours
        });
        return createCoffeeDto;
    }

    public update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        // update entity !
    }

    public remove(id: string) {
        const index = this.coffees.findIndex(item => item.id === +id);
        if (index >= 0) {
            this.coffees.splice(index, 1);
        }
    }
}
