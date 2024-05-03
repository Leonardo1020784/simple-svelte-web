<script>
    import Screen from "./screen.svelte";
	import Simplicity from "./simplicity.svelte"
	import Speed from "./speed.svelte"
	import Soundness from "./soudness.svelte"
	import Team from "./team.svelte"
	import eoin from "../lib/images/eoin.jpg"
	import thomas from "../lib/images/thomas.jpg"
	import Flash from "./flash.svelte";
	import E from "../lib/images/E.jpg"
	import TK from "../lib/images/TK.jpg"
	import TT from "../lib/images/TT.jpg"
	import MD from "../lib/images/MD.jpg"
	import NC from "../lib/images/NC.jpg"
	import SO from "../lib/images/SO.jpg"
	import BL from "../lib/images/BL.jpg"
	import JB from "../lib/images/JB.jpg"
	import a from "../lib/images/a.png"
	import b from "../lib/images/b.png"
	import f from "../lib/images/f.png"
	import ad from "../lib/images/ad.png"
	import i from "../lib/images/i.png"
</script>

<svelte:head>
    <title>Home Page</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div>
        <div class="container flex flex-col items-center mx-auto text-center">
            <p class="text-xs font-bold pb-5 text-white font-poppins">ABOUT US</p>
            <h1 class="text-4xl sm:text-5xl xl:max-w-4xl text-white font-lora">Smart, secure workflows <br/>for the <i>whole</i> team</h1>
            <p class="text-ss sm:text-sm xl:max-w-xl text-white p-4 sm:p-10 font-poppins md:ml-40 md:mr-40">We believe that by combining automation and human ingenuity, organizations will be more efficient, more secure and have more engaged, happier teams.</p>
        </div>
        <div class="w-4/5 mx-auto sm:w-3/5"><Screen/></div>
    </div>
</section>

<section class="m-10">
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                <div class="text-center md:text-left">
					<div class="flex items-center justify-between">
						<p class="text-xs font-bold pb-5 text-purple-300 font-poppins">HOW IT STARTED</p>
						<div>
							<img src={eoin} alt="eoin" class="object-cover w-16 h-16 rounded-full" />
						</div>
					</div>
					<h3 class="text-4xl sm:text-5xl xl:max-w-4xl text-purple-300 font-lora text-left">Born in security, used by everyone.</h3>
                    <p class="text-ss sm:text-lg xl:max-w-xl text-white mt-10 font-poppins text-left"> Before Tines, our founders, Eoin and Thomas spent more than a decade as senior security operators, experiencing all of the usual pain points felt within and beyond security teams: too much work; not enough staff; inevitable incidents. They knew there needed to be a laser-focused solution, so in 2018 they started building Tines.</p>
					<div>
						<img src={thomas} alt="eoin" class="mt-10 object-cover w-16 h-16 rounded-full" />
					</div>
				</div>
            </div>
            <div class="md:w-1/2 md:pl-4 bg-purple-300 rounded-lg">
                <div class="text-center md:text-left p-10 mb-10 md:mb-0"> <!-- Adjusted padding for mobile -->
                    <h3 class="text-xs font-bold pb-5 text-purple-900 font-poppins text-left">OUR MISSION</h3>
                    <p class="text-4xl sm:text-5xl xl:max-w-4xl font-bold mr-24 text-purple-900 text-left">To power the worlds most important workflows.</p>
					<div class="md:pt-24"><Flash/></div> <!-- Adjusted padding for mobile -->
                </div>
            </div>
        </div>
    </div>
</section>


<section class="p-0 md:p-20">
<p class="pl-10 text-md sm:text-lg xl:max-w-xl text-white mt-10 font-poppins text-left font-bold">Our Leadership</p>
<div class="overflow-x-auto no-scrollbar p-10">


    <div class="flex">
        <div class="flex flex-nowrap">
            <img src={E} alt="e" class="w-64 rounded-lg h-auto mx-2" />
            <img src={TK} alt="tk" class="w-64 rounded-lg h-auto mx-2" />
            <img src={TT} alt="tt" class="w-64 rounded-lg h-auto mx-2" />
            <img src={MD} alt="md" class="w-64 rounded-lg h-auto mx-2" />
            <img src={NC} alt="nc" class="w-64 rounded-lg h-auto mx-2" />
            <img src={SO} alt="so" class="w-64 rounded-lg h-auto mx-2" />
            <img src={BL} alt="bl" class="w-64 rounded-lg h-auto mx-2" />
            <img src={JB} alt="jb" class="w-64 rounded-lg h-auto mx-2" />
        </div>
    </div>
</div>
</section>

<section class="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div class="container p-4 mx-auto text-center">
		<h5 class="text-3xl font-bold text-white">Backed by the best</h5>
	</div>
	<div class="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
		<div class="flex justify-center w-1/2 p-6 align-middle md:w-1/5 xl:w-1/5">
			<img src={a} alt="a" class=" rounded-lg h-auto" />
		</div>
		<div class="flex justify-center w-1/2 p-6 align-middle md:w-1/5 xl:w-1/5">
			<img src={b} alt="a" class=" rounded-lg h-auto" />
		</div>
		<div class="flex justify-center w-1/2 p-6 align-middle md:w-1/5 xl:w-1/5">
			<img src={f} alt="a" class=" rounded-lg h-auto" />
		</div>
		<div class="flex justify-center w-1/2 p-6 align-middle md:w-1/5 xl:w-1/5">
			<img src={ad} alt="a" class=" rounded-lg h-auto" />
		</div>
		<div class="flex justify-center w-1/2 p-6 align-middle md:w-1/5 xl:w-1/5">
			<img src={i} alt="a" class=" rounded-lg h-auto" />
		</div>
	</div>
</section>

<section>
    <p class="text-4xl sm:text-5xl xl:max-w-4xl text-white font-lora text-center">Our Values</p>
    <div class="m-0 p-0 md:p-20 md:ml-20 md:mr-20 md:flex">
        <div class="md:w-1/3 p-10 m-3 md:mt-0 bg-green-200 rounded-lg flex flex-col justify-between">
            <p class="text-md text-gray-700">We strive for our product, processes, and customer interactions to be as simple, straightforward, and understandable as possible. In everything we do, we try to remove the unnecessary barriers and friction, focusing on the most important and impactful work.</p>
            <div class="flex items-center justify-between">
                <p class="text-2xl sm:text-2xl xl:max-w-4xl text-gray-700 font-lora pt-10">Simplicity</p>
                <Simplicity/>
            </div>
        </div>
        <div class="md:w-1/3 p-10 m-3 md:mt-0 bg-fuchsia-100 rounded-lg flex flex-col justify-between">
            <p class="text-md text-gray-700">We are quick to ship, to respond, and to act. Speed is critical, however, it’s irrelevant if applied in a haphazard way. We must take ownership, execute with purpose, collect feedback, and iterate. In this way, speed becomes velocity and momentum.</p>
            <div class="flex items-center justify-between">
                <p class="text-2xl sm:text-2xl xl:max-w-4xl text-gray-700 font-lora pt-10">Speed</p>
                <Speed/>
            </div>
        </div>
        <div class="md:w-1/3 p-10 m-3 md:mt-0 bg-amber-100 rounded-lg flex flex-col justify-between">
            <p class="text-md text-gray-700">We’re determined to achieve our mission and goals, but we want to be proud of HOW we achieve them. Doing the right thing for our customers and teammates is what truly sets Tines apart. We believe in giving people the benefit of the doubt. We demonstrate transparency, honesty and integrity at all times.</p>
            <div class="flex items-center justify-between">
                <p class="text-2xl sm:text-2xl xl:max-w-4xl text-gray-700 font-lora pt-10">Soundness</p>
                <Soundness/>
            </div>
        </div>
    </div>
</section>

<section class="m-5 p-0 md:p-12 md:ml-32 md:mr-32 rounded-lg bg-purple-200 ">
	<div class="container mx-auto flex flex-col items-center justify-center p-5">
		<Team/>
		<p class="text-4xl sm:text-5xl xl:max-w-4xl text-gray-700 font-lora text-center">Join Our Team</p>
		<p class="pt-2 pb-8 text-md font-medium text-center">We invite you to join our world class team in empowering a generation of accidental programmers.</p>
		<button class="px-8 py-3 text-md font-semibold rounded border-2 border-gray-700">Careers and Tines</button>
	</div>
</section>

<style>
    /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>





