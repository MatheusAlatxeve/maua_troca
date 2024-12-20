import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { IoArrowBack } from 'react-icons/io5'

export default function Login() {
    return (
        <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">

            {/* Div de imagem de fundo com blur */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/foto_login.jpg')",
                    filter: "blur(8px)",
                    zIndex: -1
                }}
            />

            {/* Ícone de voltar */}
            <Link href="/" className="absolute top-4 left-4 text-customOrange  hover:text-customBlue text-3xl">
                <IoArrowBack />
            </Link>

            {/* Conteúdo principal */}
            <div className="w-[400px] p-6 ">
                <Tabs defaultValue="login" className="w-full border-none shadow-none ">
                    <TabsList className="grid w-full grid-cols-2 border-none bg-customWhite">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="cadastrar-se">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card className="bg-customWhite">
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>Realize seu login</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">E-mail</Label>
                                    <Input id="name" placeholder="Seu email" className="placeholder-gray-400" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Senha</Label>
                                    <Input id="username" placeholder="Sua senha" className="placeholder-gray-400" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link className={`${buttonVariants({ variant: "outline" })} bg-customOrange text-white hover:bg-customBlue mt-7 rounded-xl`} href="" >Entrar</Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="cadastrar-se">
                        <Card className="bg-customWhite">
                            <CardHeader>
                                <CardTitle>Cadastrar-se</CardTitle>
                                <CardDescription>
                                    Caso não tenha uma conta, realize seu cadastro aqui.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Nome</Label>
                                    <Input id="current" placeholder="Seu nome" className="placeholder-gray-400" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">Email</Label>
                                    <Input id="new" placeholder="Seu email" className="placeholder-gray-400" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input id="password" placeholder="Sua senha" className="placeholder-gray-400" type="password" />
                                </div>
                            </CardContent>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current-room">Sala atual</Label>
                                    <Input id="current-room" placeholder="Sala atual" className="placeholder-gray-400" />
                                </div>
                            </CardContent>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="desired-room">Sala desejada</Label>
                                    <Input id="desired-room" placeholder="Sala desejada" className="placeholder-gray-400" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link className={`${buttonVariants({ variant: "outline" })} bg-customOrange text-white hover:bg-customBlue mt-7 rounded-xl`} href="" >Realizar cadastro</Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}